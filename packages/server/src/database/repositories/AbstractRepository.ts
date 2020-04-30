import * as mongoose from 'mongoose';

// TODO: implement repositories for all models (issue #9).
export interface IAbstractRepository<TEntity extends mongoose.Document> {
    model: mongoose.Model<TEntity>;
}
