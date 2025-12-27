
package com.server.plane.controller.IssueRelations;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueRelations.*;

@RestController
@RequestMapping("/api/issueRelations")
@RequiredArgsConstructor
@Tag(name = "IssueRelations")
public class IssueRelationsController {

    @PostMapping
    @Operation(summary = "Create issueRelations")
    public IssueRelationsResponse create(
        @RequestBody IssueRelationsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueRelations")
    public IssueRelationsResponse update(
        @PathVariable Long id,
        @RequestBody IssueRelationsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueRelations")
    public void delete(
        @RequestBody IssueRelationsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueRelations")
    public IssueRelationsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueRelations")
    public List<IssueRelationsResponse> list() {
        return null;
    }
}
