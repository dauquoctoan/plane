
package com.server.plane.controller.ApiTokens;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ApiTokens.*;

@RestController
@RequestMapping("/api/apiTokens")
@RequiredArgsConstructor
@Tag(name = "ApiTokens")
public class ApiTokensController {

    @PostMapping
    @Operation(summary = "Create apiTokens")
    public ApiTokensResponse create(
        @RequestBody ApiTokensCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update apiTokens")
    public ApiTokensResponse update(
        @PathVariable Long id,
        @RequestBody ApiTokensUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete apiTokens")
    public void delete(
        @RequestBody ApiTokensDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id apiTokens")
    public ApiTokensResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all apiTokens")
    public List<ApiTokensResponse> list() {
        return null;
    }
}
