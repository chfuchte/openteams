package de.chfuchte.openteams.controller;

import de.chfuchte.openteams.mapping.user.CreateUserMapping;
import de.chfuchte.openteams.mapping.user.PublicUserMapping;
import de.chfuchte.openteams.model.User;
import de.chfuchte.openteams.service.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(
            summary = "Create a new user",
            description = "The email must be unique over all users",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "A user object without the ID",
                    content = @Content(
                            schema = @Schema(implementation = CreateUserMapping.class),
                            mediaType = MediaType.APPLICATION_JSON_VALUE
                    ),
                    required = true
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200", description = "User created", content = @Content(
                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = User.class)
                    )
                    )
            }
    )
    @PostMapping()
    public PublicUserMapping createUser(@RequestBody @NotNull @Validated CreateUserMapping user) {
        User toCreate = new User();
        toCreate.setEmail(user.email());
        toCreate.setFirstName(user.firstName());
        toCreate.setLastName(user.lastName());
        toCreate.setPassword(user.password());
        User createdUser = userService.createUser(toCreate);
        return new PublicUserMapping(createdUser);
    }
}
