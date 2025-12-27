const config = require('./config');

function genController(entity) {
  const lower = entity.charAt(0).toLowerCase() + entity.slice(1);

  return `
package ${config.basePackage}.controller.${entity};

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import ${config.basePackage}.dto.${entity}.*;

@RestController
@RequestMapping("/api/${lower}")
@RequiredArgsConstructor
@Tag(name = "${entity}")
public class ${entity}Controller {

    @PostMapping
    @Operation(summary = "Create ${lower}")
    public ${entity}Response create(
        @RequestBody ${entity}CreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update ${lower}")
    public ${entity}Response update(
        @PathVariable Long id,
        @RequestBody ${entity}UpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete ${lower}")
    public void delete(
        @RequestBody ${entity}DeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id ${lower}")
    public ${entity}Response detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all ${lower}")
    public List<${entity}Response> list() {
        return null;
    }
}
`;
}

module.exports = { genController };

// @GetMapping
// @Operation(summary = "Get all ${lower}")
// @ApiResponse(
//     responseCode = "200",
//     description = "Success",
//     content = @Content(
//         mediaType = "application/json",
//         schema = @Schema(implementation = ${entity}Response.class)
// )
// )
// public List<${entity}Response> list() {
//     return null;
// }
