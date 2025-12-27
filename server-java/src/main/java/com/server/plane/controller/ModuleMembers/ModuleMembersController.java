
package com.server.plane.controller.ModuleMembers;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ModuleMembers.*;

@RestController
@RequestMapping("/api/moduleMembers")
@RequiredArgsConstructor
@Tag(name = "ModuleMembers")
public class ModuleMembersController {

    @PostMapping
    @Operation(summary = "Create moduleMembers")
    public ModuleMembersResponse create(
        @RequestBody ModuleMembersCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update moduleMembers")
    public ModuleMembersResponse update(
        @PathVariable Long id,
        @RequestBody ModuleMembersUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete moduleMembers")
    public void delete(
        @RequestBody ModuleMembersDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id moduleMembers")
    public ModuleMembersResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all moduleMembers")
    public List<ModuleMembersResponse> list() {
        return null;
    }
}
