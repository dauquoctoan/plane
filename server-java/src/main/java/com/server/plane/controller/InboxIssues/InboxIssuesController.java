
package com.server.plane.controller.InboxIssues;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.InboxIssues.*;

@RestController
@RequestMapping("/api/inboxIssues")
@RequiredArgsConstructor
@Tag(name = "InboxIssues")
public class InboxIssuesController {

    @PostMapping
    @Operation(summary = "Create inboxIssues")
    public InboxIssuesResponse create(
        @RequestBody InboxIssuesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update inboxIssues")
    public InboxIssuesResponse update(
        @PathVariable Long id,
        @RequestBody InboxIssuesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete inboxIssues")
    public void delete(
        @RequestBody InboxIssuesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id inboxIssues")
    public InboxIssuesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all inboxIssues")
    public List<InboxIssuesResponse> list() {
        return null;
    }
}
