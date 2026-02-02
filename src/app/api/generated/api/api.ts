export * from './accounts.service';
import { AccountsService } from './accounts.service';
export * from './general.service';
import { GeneralService } from './general.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AccountsService, GeneralService, UsersService];
