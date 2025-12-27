
package com.server.plane.controller.Inboxes;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Inboxes.*;

@RestController
@RequestMapping("/api/inboxes")
@RequiredArgsConstructor
@Tag(name = "Inboxes")
public class InboxesController {

    @PostMapping
    @Operation(summary = "Create inboxes")
    public InboxesResponse create(
        @RequestBody InboxesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update inboxes")
    public InboxesResponse update(
        @PathVariable Long id,
        @RequestBody InboxesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete inboxes")
    public void delete(
        @RequestBody InboxesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id inboxes")
    public InboxesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all inboxes")
    public List<InboxesResponse> list() {
        return null;
    }
}
