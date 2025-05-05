import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(): Promise<void> {
    console.info(chalk.blue(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            cli.js --<command> [--arguments]
        Команды:
            --version:                   # выводит номер версии
            --help:                      # печатает этот текст
            --generate: <count> <path> <SERVER_API>             # генерирует count предложений
            --import <path> <DB_USER> <DB_PASSWORD> <DB_HOST> <DB_NAME> <SALT>:             # импортирует данные из TSV
    `));
  }
}
