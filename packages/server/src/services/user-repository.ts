import { EntityRepository, AbstractRepository } from 'typeorm';
import { User } from '@chat/shared';

@EntityRepository(User)
export default class UserRepository extends AbstractRepository<User> {

    async createNew(username: string, password: string) {
        // TODO:
        // Создать конструктор для User, который примет Username и PasswordHash.
        // В этом методе захэшировать пароль. Передать его в конструктор.
        // Здесь всё сохранить.

        return await this.repository.save(new User(username, password));
    }

    findByUsername(username: string) {
        return this.repository.findOne({ where: { Username: username } });
    }

    editBio(userId: string, newBio: string) {
        // TODO:
        throw new Error('Not implemented.');
    }
}