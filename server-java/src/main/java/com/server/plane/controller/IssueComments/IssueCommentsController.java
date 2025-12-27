
package com.server.plane.controller.IssueComments;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueComments.*;

@RestController
@RequestMapping("/api/issueComments")
@RequiredArgsConstructor
@Tag(name = "IssueComments")
public class IssueCommentsController {

    @PostMapping
    @Operation(summary = "Create issueComments")
    public IssueCommentsResponse create(
        @RequestBody IssueCommentsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueComments")
    public IssueCommentsResponse update(
        @PathVariable Long id,
        @RequestBody IssueCommentsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueComments")
    public void delete(
        @RequestBody IssueCommentsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueComments")
    public IssueCommentsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueComments")
    public List<IssueCommentsResponse> list() {
        return null;
    }
}
