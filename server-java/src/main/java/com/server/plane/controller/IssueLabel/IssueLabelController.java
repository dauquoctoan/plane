
package com.server.plane.controller.IssueLabel;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueLabel.*;

@RestController
@RequestMapping("/api/issueLabel")
@RequiredArgsConstructor
@Tag(name = "IssueLabel")
public class IssueLabelController {

    @PostMapping
    @Operation(summary = "Create issueLabel")
    public IssueLabelResponse create(
        @RequestBody IssueLabelCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueLabel")
    public IssueLabelResponse update(
        @PathVariable Long id,
        @RequestBody IssueLabelUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueLabel")
    public void delete(
        @RequestBody IssueLabelDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueLabel")
    public IssueLabelResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueLabel")
    public List<IssueLabelResponse> list() {
        return null;
    }
}
