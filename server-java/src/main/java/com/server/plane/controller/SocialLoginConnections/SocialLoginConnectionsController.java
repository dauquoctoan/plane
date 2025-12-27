
package com.server.plane.controller.SocialLoginConnections;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.SocialLoginConnections.*;

@RestController
@RequestMapping("/api/socialLoginConnections")
@RequiredArgsConstructor
@Tag(name = "SocialLoginConnections")
public class SocialLoginConnectionsController {

    @PostMapping
    @Operation(summary = "Create socialLoginConnections")
    public SocialLoginConnectionsResponse create(
        @RequestBody SocialLoginConnectionsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update socialLoginConnections")
    public SocialLoginConnectionsResponse update(
        @PathVariable Long id,
        @RequestBody SocialLoginConnectionsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete socialLoginConnections")
    public void delete(
        @RequestBody SocialLoginConnectionsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id socialLoginConnections")
    public SocialLoginConnectionsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all socialLoginConnections")
    public List<SocialLoginConnectionsResponse> list() {
        return null;
    }
}
