package de.chfuchte.openteams.config;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;

@Configuration
public class SwaggerConfiguration {
    @Value("${spring.application.version}")
    private String applicationVersion;

    @Bean
    public OpenAPI shopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("OpenTeams API")
                        .description("")
                        .version(applicationVersion)
                        .license(new License().name("MIT").url("https://opensource.org/license/mit"))
                        .contact(new Contact().name("Christian Fuchte").url("https://github.com/chfuchte"))
                );
    }
}
