package de.chfuchte.openteams.mapping.user;

import de.chfuchte.openteams.model.User;

/**
 * Mapping of the {@link de.chfuchte.openteams.model.User} without backend-only fields (fe. password)
 */
public record PublicUserMapping(String id, String email, String firstName, String lastName) {
    public PublicUserMapping(User user) {
        this(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName());
    }
}
