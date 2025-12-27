
package com.server.plane.controller.ProjectDeployBoards;

import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import java.util.List;
import com.server.plane.dto.ProjectDeployBoards.*;

@RestController
@RequestMapping("/api/projectDeployBoards")
@RequiredArgsConstructor
@Tag(name = "ProjectDeployBoards")
public class ProjectDeployBoardsController {

    @PostMapping
    @Operation(summary = "Create projectDeployBoards")
    public ProjectDeployBoardsResponse create(
        @RequestBody ProjectDeployBoardsCreateRequest req
    ) {
        return null;
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update projectDeployBoards")
    public ProjectDeployBoardsResponse update(
        @PathVariable Long id,
        @RequestBody ProjectDeployBoardsUpdateRequest req
    ) {
        return null;
    }

    @DeleteMapping
    @Operation(summary = "Delete projectDeployBoards")
    public void delete(
        @RequestBody ProjectDeployBoardsDeleteRequest req
    ) {}

    @GetMapping("/{id}")
    @Operation(summary = "Get by Id projectDeployBoards")
    public ProjectDeployBoardsResponse detail(@PathVariable Long id) {
        return null;
    }

    @GetMapping
    @Operation(summary = "Get all projectDeployBoards")
    public List<ProjectDeployBoardsResponse> list() {
        return null;
    }
}
