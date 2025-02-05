package de.chfuchte.openteams.mapping.user;

/**
 * Mapping of the {@link de.chfuchte.openteams.model.User} without generated values
 */
public record CreateUserMapping(String email, String firstName, String lastName, String password) {
}
