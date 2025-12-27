
package com.server.plane.controller.ModuleIssues;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ModuleIssues.*;

@RestController
@RequestMapping("/api/moduleIssues")
@RequiredArgsConstructor
@Tag(name = "ModuleIssues")
public class ModuleIssuesController {

    @PostMapping
    @Operation(summary = "Create moduleIssues")
    public ModuleIssuesResponse create(
        @RequestBody ModuleIssuesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update moduleIssues")
    public ModuleIssuesResponse update(
        @PathVariable Long id,
        @RequestBody ModuleIssuesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete moduleIssues")
    public void delete(
        @RequestBody ModuleIssuesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id moduleIssues")
    public ModuleIssuesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all moduleIssues")
    public List<ModuleIssuesResponse> list() {
        return null;
    }
}
