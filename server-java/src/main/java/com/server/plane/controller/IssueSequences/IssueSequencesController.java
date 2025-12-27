
package com.server.plane.controller.IssueSequences;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.IssueSequences.*;

@RestController
@RequestMapping("/api/issueSequences")
@RequiredArgsConstructor
@Tag(name = "IssueSequences")
public class IssueSequencesController {

    @PostMapping
    @Operation(summary = "Create issueSequences")
    public IssueSequencesResponse create(
        @RequestBody IssueSequencesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update issueSequences")
    public IssueSequencesResponse update(
        @PathVariable Long id,
        @RequestBody IssueSequencesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete issueSequences")
    public void delete(
        @RequestBody IssueSequencesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id issueSequences")
    public IssueSequencesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all issueSequences")
    public List<IssueSequencesResponse> list() {
        return null;
    }
}
