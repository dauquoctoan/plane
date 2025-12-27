
package com.server.plane.controller.Pages;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.Pages.*;

@RestController
@RequestMapping("/api/pages")
@RequiredArgsConstructor
@Tag(name = "Pages")
public class PagesController {

    @PostMapping
    @Operation(summary = "Create pages")
    public PagesResponse create(
        @RequestBody PagesCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update pages")
    public PagesResponse update(
        @PathVariable Long id,
        @RequestBody PagesUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete pages")
    public void delete(
        @RequestBody PagesDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id pages")
    public PagesResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all pages")
    public List<PagesResponse> list() {
        return null;
    }
}
