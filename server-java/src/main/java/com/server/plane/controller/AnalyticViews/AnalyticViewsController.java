
package com.server.plane.controller.AnalyticViews;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.AnalyticViews.*;

@RestController
@RequestMapping("/api/analyticViews")
@RequiredArgsConstructor
@Tag(name = "AnalyticViews")
public class AnalyticViewsController {

    @PostMapping
    @Operation(summary = "Create analyticViews")
    public AnalyticViewsResponse create(
        @RequestBody AnalyticViewsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update analyticViews")
    public AnalyticViewsResponse update(
        @PathVariable Long id,
        @RequestBody AnalyticViewsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete analyticViews")
    public void delete(
        @RequestBody AnalyticViewsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id analyticViews")
    public AnalyticViewsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all analyticViews")
    public List<AnalyticViewsResponse> list() {
        return null;
    }
}
