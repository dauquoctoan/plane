
package com.server.plane.controller.IssueProperties;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueProperties.*;

@RestController
@RequestMapping("/api/issueProperties")
@RequiredArgsConstructor
@Tag(name = "IssueProperties")
public class IssuePropertiesController {

    @PostMapping
    @Operation(summary = "Create issueProperties")
    public IssuePropertiesResponse create(
        @RequestBody IssuePropertiesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueProperties")
    public IssuePropertiesResponse update(
        @PathVariable Long id,
        @RequestBody IssuePropertiesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueProperties")
    public void delete(
        @RequestBody IssuePropertiesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueProperties")
    public IssuePropertiesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueProperties")
    public List<IssuePropertiesResponse> list() {
        return null;
    }
}
