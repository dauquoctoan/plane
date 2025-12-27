
package com.server.plane.controller.Issue;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Issue.*;

@RestController
@RequestMapping("/api/issue")
@RequiredArgsConstructor
@Tag(name = "Issue")
public class IssueController {

    @PostMapping
    @Operation(summary = "Create issue")
    public IssueResponse create(
        @RequestBody IssueCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issue")
    public IssueResponse update(
        @PathVariable Long id,
        @RequestBody IssueUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issue")
    public void delete(
        @RequestBody IssueDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issue")
    public IssueResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issue")
    public List<IssueResponse> list() {
        return null;
    }
}
