package de.chfuchte.openteams.config;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.*;
import org.springframework.boot.info.BuildProperties;
import org.springframework.context.annotation.*;

@Configuration
public class SwaggerConfiguration {
    private final BuildProperties buildProperties;

    public SwaggerConfiguration(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @Bean
    public OpenAPI shopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("OpenTeams API")
                        .description("")
                        .version(buildProperties.getVersion())
                        .license(new License().name("MIT").url("https://opensource.org/license/mit"))
                        .contact(new Contact().name("Christian Fuchte").url("https://github.com/chfuchte"))
                );
    }
}
