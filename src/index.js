#!/usr/bin/env node

/**
 * WP-CC CLI Main Entry Point
 * Converts natural language commands to manager method calls
 */

import chalk from 'chalk';
import ora from 'ora';
import Table from 'cli-table3';

// Import managers (converted from MCP)
import { DockerManager } from './managers/docker-manager.js';
import { WordPressManager } from './managers/wordpress-manager.js';
import { DatabaseManager } from './managers/database-manager.js';
import { ProjectManager } from './managers/project-manager.js';
import { GitManager } from './managers/git-manager.js';
import { ResearchManager } from './managers/research-manager.js';
import { SiteGroundManager } from './managers/siteground-manager.js';
import { TestingManager } from './managers/testing-manager.js';
import { WPCLIManager } from './managers/wpcli-manager.js';
import { WPRestManager } from './managers/wprest-manager.js';

export class WPCli {
  constructor() {
    // Initialize managers
    this.dockerManager = new DockerManager();
    this.wordpressManager = new WordPressManager();
    this.databaseManager = new DatabaseManager();
    this.projectManager = new ProjectManager();
    this.gitManager = new GitManager();
    this.researchManager = new ResearchManager();
    this.sitegroundManager = new SiteGroundManager();
    this.testingManager = new TestingManager();
    this.wpcliManager = new WPCLIManager();
    this.wprestManager = new WPRestManager();

    // Command patterns for natural language processing
    this.commandPatterns = {
      // Project Management
      'create project': {
        pattern: /create\s+(?:a\s+)?(?:new\s+)?project\s+(?:called\s+)?["']?([^"'\s]+)["']?(?:\s+on\s+port\s+(\d+))?/i,
        handler: this.handleCreateProject.bind(this)
      },
      'list projects': {
        pattern: /list\s+(?:all\s+)?projects?/i,
        handler: this.handleListProjects.bind(this)
      },
      'start project': {
        pattern: /start\s+(?:the\s+)?(?:project\s+)?["']?([^"'\s]+)["']?/i,
        handler: this.handleStartProject.bind(this)
      },
      'stop project': {
        pattern: /stop\s+(?:the\s+)?(?:project\s+)?["']?([^"'\s]+)["']?/i,
        handler: this.handleStopProject.bind(this)
      },
      'delete project': {
        pattern: /delete\s+(?:the\s+)?(?:project\s+)?["']?([^"'\s]+)["']?/i,
        handler: this.handleDeleteProject.bind(this)
      },

      // Docker Operations
      'start containers': {
        pattern: /start\s+(?:the\s+)?(?:docker\s+)?containers?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleStartContainers.bind(this)
      },
      'stop containers': {
        pattern: /stop\s+(?:the\s+)?(?:docker\s+)?containers?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleStopContainers.bind(this)
      },
      'restart containers': {
        pattern: /restart\s+(?:the\s+)?(?:docker\s+)?containers?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleRestartContainers.bind(this)
      },
      'show logs': {
        pattern: /show\s+(?:the\s+)?logs?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleShowLogs.bind(this)
      },

      // Research Operations
      'research topic': {
        pattern: /research\s+(?:topic\s+)?["']([^"']+)["']/i,
        handler: this.handleResearchTopic.bind(this)
      },
      'generate content': {
        pattern: /generate\s+(?:content|posts?)\s+(?:from\s+research\s+)?(?:for\s+)?["']?([^"'\s]+)["']?/i,
        handler: this.handleGenerateContent.bind(this)
      },

      // Testing Operations
      'test links': {
        pattern: /test\s+(?:all\s+)?(?:the\s+)?links?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleTestLinks.bind(this)
      },
      'test seo': {
        pattern: /test\s+(?:the\s+)?seo?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleTestSEO.bind(this)
      },
      'test comprehensive': {
        pattern: /(?:run\s+)?(?:comprehensive|complete|full)\s+tests?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleTestComprehensive.bind(this)
      },

      // Database Operations
      'dump database': {
        pattern: /dump\s+(?:the\s+)?database?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleDumpDatabase.bind(this)
      },
      'import database': {
        pattern: /import\s+(?:the\s+)?database?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleImportDatabase.bind(this)
      },

      // Git Operations
      'git status': {
        pattern: /git\s+status(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleGitStatus.bind(this)
      },
      'git commit': {
        pattern: /git\s+commit\s+(?:["']([^"']+)["'])(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleGitCommit.bind(this)
      },

      // Deployment Operations
      'deploy to production': {
        pattern: /deploy\s+(?:["']?([^"'\s]+)["']?\s+)?to\s+(?:siteground\s+)?production/i,
        handler: this.handleDeployProduction.bind(this)
      },

      // WordPress Operations
      'install theme': {
        pattern: /install\s+(?:the\s+)?(?:theme\s+)?["']?([^"'\s]+)["']?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleInstallTheme.bind(this)
      },
      'install plugin': {
        pattern: /install\s+(?:the\s+)?plugin\s+["']?([^"'\s]+)["']?(?:\s+for\s+["']?([^"'\s]+)["']?)?/i,
        handler: this.handleInstallPlugin.bind(this)
      }
    };
  }

  async executeCommand(commandText) {
    const spinner = ora('Processing command...').start();

    try {
      let executed = false;

      // Try to match command patterns
      for (const [commandName, config] of Object.entries(this.commandPatterns)) {
        const match = commandText.match(config.pattern);
        if (match) {
          spinner.text = `Executing: ${commandName}`;
          executed = true;

          const result = await config.handler(match, commandText);
          spinner.succeed(`✅ ${commandName} completed`);

          this.displayResult(result);
          return;
        }
      }

      // If no pattern matched, provide help
      spinner.warn('⚠️  Command not recognized');
      console.log(chalk.yellow('Available commands:'));
      console.log(chalk.white('• create project <name> [port]'));
      console.log(chalk.white('• list projects'));
      console.log(chalk.white('• start/stop/restart project <name>'));
      console.log(chalk.white('• start/stop/restart containers [for project]'));
      console.log(chalk.white('• research topic "topic"'));
      console.log(chalk.white('• generate content [for project]'));
      console.log(chalk.white('• test links/seo/comprehensive [for project]'));
      console.log(chalk.white('• deploy <project> to production'));
      console.log(chalk.white('• install theme/plugin <name> [for project]'));

      console.log(chalk.gray('\nExample: wp-cc create project called my-blog on port 8080'));

    } catch (error) {
      spinner.fail('❌ Command failed');
      console.error(chalk.red('Error:'), error.message);
      throw error;
    }
  }

  displayResult(result) {
    if (!result) return;

    console.log();

    if (result.success === false) {
      console.log(chalk.red('❌ Error:'), result.message || 'Operation failed');
      if (result.error) {
        console.log(chalk.gray('Details:'), result.error);
      }
      return;
    }

    if (typeof result === 'string') {
      console.log(chalk.green(result));
      return;
    }

    if (result.message) {
      console.log(chalk.green(result.message));
    }

    if (result.data && Array.isArray(result.data)) {
      const table = new Table({
        head: Object.keys(result.data[0] || {}),
        style: {
          head: ['cyan'],
          border: ['gray']
        }
      });

      result.data.forEach(row => {
        table.push(Object.values(row));
      });

      console.log(table.toString());
    }

    if (result.output) {
      console.log(chalk.white(result.output));
    }
  }

  // Command Handlers (simplified versions that call manager methods)

  async handleCreateProject(match, commandText) {
    const projectName = match[1];
    const port = match[2] || 8080;

    await this.projectManager.initialize();
    return await this.projectManager.createProject({
      name: projectName,
      port: parseInt(port),
      type: 'wordpress'
    });
  }

  async handleListProjects(match, commandText) {
    await this.projectManager.initialize();
    return await this.projectManager.listProjects();
  }

  async handleStartProject(match, commandText) {
    const projectName = match[1];
    await this.dockerManager.initialize();
    return await this.dockerManager.startContainers(projectName);
  }

  async handleStopProject(match, commandText) {
    const projectName = match[1];
    await this.dockerManager.initialize();
    return await this.dockerManager.stopContainers(projectName);
  }

  async handleDeleteProject(match, commandText) {
    const projectName = match[1];
    await this.projectManager.initialize();
    return await this.projectManager.deleteProject(projectName);
  }

  async handleStartContainers(match, commandText) {
    const projectName = match[1];
    await this.dockerManager.initialize();
    return await this.dockerManager.startContainers(projectName);
  }

  async handleStopContainers(match, commandText) {
    const projectName = match[1];
    await this.dockerManager.initialize();
    return await this.dockerManager.stopContainers(projectName);
  }

  async handleRestartContainers(match, commandText) {
    const projectName = match[1];
    await this.dockerManager.initialize();
    return await this.dockerManager.restartContainers(projectName);
  }

  async handleShowLogs(match, commandText) {
    const projectName = match[1];
    await this.dockerManager.initialize();
    return await this.dockerManager.showLogs(projectName);
  }

  async handleResearchTopic(match, commandText) {
    const topic = match[1];
    const projectName = this.extractProjectName(commandText);

    await this.researchManager.initialize();
    return await this.researchManager.exhaustiveResearch(projectName, topic);
  }

  async handleGenerateContent(match, commandText) {
    const projectName = match[1];
    await this.researchManager.initialize();
    return await this.researchManager.generateContent(projectName, 'directory_listing');
  }

  async handleTestLinks(match, commandText) {
    const projectName = match[1];
    await this.testingManager.initialize();
    return await this.testingManager.testAllLinks(projectName);
  }

  async handleTestSEO(match, commandText) {
    const projectName = match[1];
    await this.testingManager.initialize();
    return await this.testingManager.testSEO(projectName);
  }

  async handleTestComprehensive(match, commandText) {
    const projectName = match[1];
    await this.testingManager.initialize();
    return await this.testingManager.runComprehensiveTests(projectName);
  }

  async handleDumpDatabase(match, commandText) {
    const projectName = match[1];
    await this.databaseManager.initialize();
    return await this.databaseManager.dumpDatabase(projectName, 'CLI Database Dump');
  }

  async handleImportDatabase(match, commandText) {
    const projectName = match[1];
    await this.databaseManager.initialize();
    return await this.databaseManager.importDatabase(projectName, 'latest.sql');
  }

  async handleGitStatus(match, commandText) {
    const projectName = match[1];
    await this.gitManager.initialize();
    return await this.gitManager.getStatus(projectName);
  }

  async handleGitCommit(match, commandText) {
    const message = match[1];
    const projectName = match[2];
    await this.gitManager.initialize();
    return await this.gitManager.commitChanges(projectName, message);
  }

  async handleDeployProduction(match, commandText) {
    const projectName = match[1];
    await this.sitegroundManager.initialize();
    return await this.sitegroundManager.deploy(projectName, {
      branch: 'master',
      clearCache: true,
      message: 'Production deployment via CLI'
    });
  }

  async handleInstallTheme(match, commandText) {
    const themeName = match[1];
    const projectName = match[2];
    await this.wordpressManager.initialize();
    return await this.wordpressManager.installTheme(projectName, themeName);
  }

  async handleInstallPlugin(match, commandText) {
    const pluginName = match[1];
    const projectName = match[2];
    await this.wordpressManager.initialize();
    return await this.wordpressManager.installPlugin(projectName, pluginName);
  }

  // Utility method to extract project name from command text
  extractProjectName(commandText) {
    const projectMatch = commandText.match(/(?:for|in)\s+(?:the\s+)?(?:project\s+)?["']?([^"'\s]+)["']?/i);
    return projectMatch ? projectMatch[1] : null;
  }
}