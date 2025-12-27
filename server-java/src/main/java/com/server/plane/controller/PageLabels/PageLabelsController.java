
package com.server.plane.controller.PageLabels;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.PageLabels.*;

@RestController
@RequestMapping("/api/pageLabels")
@RequiredArgsConstructor
@Tag(name = "PageLabels")
public class PageLabelsController {

    @PostMapping
    @Operation(summary = "Create pageLabels")
    public PageLabelsResponse create(
        @RequestBody PageLabelsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update pageLabels")
    public PageLabelsResponse update(
        @PathVariable Long id,
        @RequestBody PageLabelsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete pageLabels")
    public void delete(
        @RequestBody PageLabelsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id pageLabels")
    public PageLabelsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all pageLabels")
    public List<PageLabelsResponse> list() {
        return null;
    }
}
