
package com.server.plane.controller.IssueViews;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueViews.*;

@RestController
@RequestMapping("/api/issueViews")
@RequiredArgsConstructor
@Tag(name = "IssueViews")
public class IssueViewsController {

    @PostMapping
    @Operation(summary = "Create issueViews")
    public IssueViewsResponse create(
        @RequestBody IssueViewsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueViews")
    public IssueViewsResponse update(
        @PathVariable Long id,
        @RequestBody IssueViewsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueViews")
    public void delete(
        @RequestBody IssueViewsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueViews")
    public IssueViewsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueViews")
    public List<IssueViewsResponse> list() {
        return null;
    }
}
