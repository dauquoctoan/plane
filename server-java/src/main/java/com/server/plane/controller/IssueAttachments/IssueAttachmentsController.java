
package com.server.plane.controller.IssueAttachments;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueAttachments.*;

@RestController
@RequestMapping("/api/issueAttachments")
@RequiredArgsConstructor
@Tag(name = "IssueAttachments")
public class IssueAttachmentsController {

    @PostMapping
    @Operation(summary = "Create issueAttachments")
    public IssueAttachmentsResponse create(
        @RequestBody IssueAttachmentsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueAttachments")
    public IssueAttachmentsResponse update(
        @PathVariable Long id,
        @RequestBody IssueAttachmentsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueAttachments")
    public void delete(
        @RequestBody IssueAttachmentsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueAttachments")
    public IssueAttachmentsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueAttachments")
    public List<IssueAttachmentsResponse> list() {
        return null;
    }
}
