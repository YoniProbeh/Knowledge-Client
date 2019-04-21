import { Model } from './Model';

export class Profile<T extends Model<T>> {
    description?: string;
    summary?: string;
}
