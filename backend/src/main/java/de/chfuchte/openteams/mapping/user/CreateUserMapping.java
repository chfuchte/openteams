package de.chfuchte.openteams.mapping.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

/**
 * Mapping of the {@link de.chfuchte.openteams.model.User} without generated values
 * !!Validated!!
 */
public record CreateUserMapping(@Email @NotEmpty @NotNull String email,
                                @NotEmpty @NotNull String firstName,
                                @NotEmpty @NotNull String lastName,
                                @NotEmpty @NotNull String password) {
}
