
package com.server.plane.controller.IssueAssignees;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueAssignees.*;

@RestController
@RequestMapping("/api/issueAssignees")
@RequiredArgsConstructor
@Tag(name = "IssueAssignees")
public class IssueAssigneesController {

    @PostMapping
    @Operation(summary = "Create issueAssignees")
    public IssueAssigneesResponse create(
        @RequestBody IssueAssigneesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueAssignees")
    public IssueAssigneesResponse update(
        @PathVariable Long id,
        @RequestBody IssueAssigneesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueAssignees")
    public void delete(
        @RequestBody IssueAssigneesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueAssignees")
    public IssueAssigneesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueAssignees")
    public List<IssueAssigneesResponse> list() {
        return null;
    }
}
