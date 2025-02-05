package de.chfuchte.openteams.mapping.user;

/**
 * Complete Mapping of the {@link de.chfuchte.openteams.model.User}
 */
public record FullUserMapping(String id, String email, String firstName, String lastName, String password) {
}
