
package com.server.plane.controller.Teams;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Teams.*;

@RestController
@RequestMapping("/api/teams")
@RequiredArgsConstructor
@Tag(name = "Teams")
public class TeamsController {

    @PostMapping
    @Operation(summary = "Create teams")
    public TeamsResponse create(
        @RequestBody TeamsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update teams")
    public TeamsResponse update(
        @PathVariable Long id,
        @RequestBody TeamsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete teams")
    public void delete(
        @RequestBody TeamsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id teams")
    public TeamsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all teams")
    public List<TeamsResponse> list() {
        return null;
    }
}
