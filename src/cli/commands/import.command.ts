import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';
import chalk from 'chalk';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename.trim());

    try {
      fileReader.read();
      const offers = fileReader.toArray();
      console.info(chalk.green(`Данные успешно импортированы из файла ${filename}`));
      console.dir(offers, { depth: null });
    } catch (err) {
      console.error(chalk.red(`Не удалось импортировать данные из файла: ${filename}`));
      if (err instanceof Error) {
        console.error(chalk.red(`Детали: ${err.message}`));
      }
    }
  }
}
