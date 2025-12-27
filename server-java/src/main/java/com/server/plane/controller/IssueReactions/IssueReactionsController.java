
package com.server.plane.controller.IssueReactions;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueReactions.*;

@RestController
@RequestMapping("/api/issueReactions")
@RequiredArgsConstructor
@Tag(name = "IssueReactions")
public class IssueReactionsController {

    @PostMapping
    @Operation(summary = "Create issueReactions")
    public IssueReactionsResponse create(
        @RequestBody IssueReactionsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueReactions")
    public IssueReactionsResponse update(
        @PathVariable Long id,
        @RequestBody IssueReactionsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueReactions")
    public void delete(
        @RequestBody IssueReactionsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueReactions")
    public IssueReactionsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueReactions")
    public List<IssueReactionsResponse> list() {
        return null;
    }
}
