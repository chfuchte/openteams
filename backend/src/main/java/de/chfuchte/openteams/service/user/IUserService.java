package de.chfuchte.openteams.service.user;

import de.chfuchte.openteams.model.User;

public interface IUserService {
    User createUser(User user);
    User getUserByEmail(String email);
}

