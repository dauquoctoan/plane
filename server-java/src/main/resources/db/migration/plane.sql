-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: plane
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `analytic_views`
--

DROP TABLE IF EXISTS `analytic_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `analytic_views` (
                                  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                  `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                  `name` varchar(255) NOT NULL,
                                  `description` text,
                                  `query` json DEFAULT NULL,
                                  `query_dict` json DEFAULT NULL,
                                  `created_at` datetime NOT NULL,
                                  `updated_at` datetime NOT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `workspace_id` (`workspace_id`),
                                  CONSTRAINT `analytic_views_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `api_tokens`
--

DROP TABLE IF EXISTS `api_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_tokens` (
                              `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                              `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                              `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                              `token` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                              `label` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                              `user_type` int DEFAULT NULL,
                              `created_at` datetime NOT NULL,
                              `updated_at` datetime NOT NULL,
                              PRIMARY KEY (`id`),
                              KEY `workspace_id` (`workspace_id`),
                              KEY `user_id` (`user_id`),
                              CONSTRAINT `api_tokens_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                              CONSTRAINT `api_tokens_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comment_reaction`
--

DROP TABLE IF EXISTS `comment_reaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_reaction` (
                                    `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `actor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `comment` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `reaction` varchar(255) DEFAULT NULL,
                                    `created_at` datetime NOT NULL,
                                    `updated_at` datetime NOT NULL,
                                    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cycle_favorites`
--

DROP TABLE IF EXISTS `cycle_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycle_favorites` (
                                   `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `cycle_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `user_id` (`user_id`),
                                   KEY `cycle_id` (`cycle_id`),
                                   CONSTRAINT `cycle_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                   CONSTRAINT `cycle_favorites_ibfk_2` FOREIGN KEY (`cycle_id`) REFERENCES `cycles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cycle_issues`
--

DROP TABLE IF EXISTS `cycle_issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycle_issues` (
                                `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                `cycle_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                `created_at` datetime NOT NULL,
                                `updated_at` datetime NOT NULL,
                                PRIMARY KEY (`id`),
                                KEY `issue_id` (`issue_id`),
                                KEY `cycle_id` (`cycle_id`),
                                CONSTRAINT `cycle_issues_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                CONSTRAINT `cycle_issues_ibfk_2` FOREIGN KEY (`cycle_id`) REFERENCES `cycles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cycles`
--

DROP TABLE IF EXISTS `cycles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycles` (
                          `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                          `owned_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `name` varchar(255) NOT NULL,
                          `description` text,
                          `start_date` datetime DEFAULT NULL,
                          `end_date` datetime DEFAULT NULL,
                          `view_props` json DEFAULT NULL,
                          `sort_order` float DEFAULT '65535',
                          `created_at` datetime NOT NULL,
                          `updated_at` datetime NOT NULL,
                          PRIMARY KEY (`id`),
                          KEY `owned_by` (`owned_by`),
                          KEY `created_by` (`created_by`),
                          KEY `project_id` (`project_id`),
                          KEY `workspace_id` (`workspace_id`),
                          CONSTRAINT `cycles_ibfk_1` FOREIGN KEY (`owned_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                          CONSTRAINT `cycles_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
                          CONSTRAINT `cycles_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON UPDATE CASCADE,
                          CONSTRAINT `cycles_ibfk_4` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cycle_user_properties`
--

DROP TABLE IF EXISTS `cycle_user_properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycle_user_properties` (
                                         `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                         `cycle_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                         `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                         `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                         `filters` json DEFAULT NULL,
                                         `display_filters` json DEFAULT NULL,
                                         `display_properties` json DEFAULT NULL,
                                         `created_at` datetime NOT NULL,
                                         `updated_at` datetime NOT NULL,
                                         PRIMARY KEY (`id`),
                                         KEY `cycle_id` (`cycle_id`),
                                         KEY `user_id` (`user_id`),
                                         KEY `project_id` (`project_id`),
                                         CONSTRAINT `cycle_user_properties_ibfk_1` FOREIGN KEY (`cycle_id`) REFERENCES `cycles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                         CONSTRAINT `cycle_user_properties_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                         CONSTRAINT `cycle_user_properties_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estimate_points`
--

DROP TABLE IF EXISTS `estimate_points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estimate_points` (
                                   `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `estimate_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `key` int DEFAULT NULL,
                                   `description` text,
                                   `value` varchar(255) NOT NULL,
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `estimate_id` (`estimate_id`),
                                   CONSTRAINT `estimate_points_ibfk_1` FOREIGN KEY (`estimate_id`) REFERENCES `estimates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estimates`
--

DROP TABLE IF EXISTS `estimates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estimates` (
                             `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                             `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                             `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                             `name` varchar(255) NOT NULL,
                             `description` text,
                             `created_at` datetime NOT NULL,
                             `updated_at` datetime NOT NULL,
                             PRIMARY KEY (`id`),
                             KEY `project_id` (`project_id`),
                             KEY `workspace_id` (`workspace_id`),
                             CONSTRAINT `estimates_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                             CONSTRAINT `estimates_ibfk_2` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `exporter_histories`
--

DROP TABLE IF EXISTS `exporter_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exporter_histories` (
                                      `id` int NOT NULL AUTO_INCREMENT,
                                      `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                      `project` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                      `provider` varchar(255) DEFAULT NULL,
                                      `status` varchar(255) DEFAULT 'queued',
                                      `reason` text,
                                      `key` text,
                                      `url` varchar(255) DEFAULT NULL,
                                      `token` varchar(255) DEFAULT NULL,
                                      `initiated_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                      `created_at` datetime NOT NULL,
                                      `updated_at` datetime NOT NULL,
                                      PRIMARY KEY (`id`),
                                      KEY `workspace_id` (`workspace_id`),
                                      CONSTRAINT `exporter_histories_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `file_assets`
--

DROP TABLE IF EXISTS `file_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file_assets` (
                               `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `attributes` json DEFAULT NULL,
                               `asset` varchar(255) NOT NULL,
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`id`),
                               KEY `workspace_id` (`workspace_id`),
                               CONSTRAINT `file_assets_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `flyway_schema_history`
--

DROP TABLE IF EXISTS `flyway_schema_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flyway_schema_history` (
                                         `installed_rank` int NOT NULL,
                                         `version` varchar(50) DEFAULT NULL,
                                         `description` varchar(200) NOT NULL,
                                         `type` varchar(20) NOT NULL,
                                         `script` varchar(1000) NOT NULL,
                                         `checksum` int DEFAULT NULL,
                                         `installed_by` varchar(100) NOT NULL,
                                         `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                         `execution_time` int NOT NULL,
                                         `success` tinyint(1) NOT NULL,
                                         PRIMARY KEY (`installed_rank`),
                                         KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `global_views`
--

DROP TABLE IF EXISTS `global_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_views` (
                                `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `name` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `description` varchar(255) DEFAULT NULL,
                                `query` json DEFAULT NULL,
                                `access` varchar(255) DEFAULT '1',
                                `query_data` json DEFAULT NULL,
                                `created_at` datetime NOT NULL,
                                `updated_at` datetime NOT NULL,
                                PRIMARY KEY (`id`),
                                KEY `workspace_id` (`workspace_id`),
                                CONSTRAINT `global_views_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `importers`
--

DROP TABLE IF EXISTS `importers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `importers` (
                             `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                             `token` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                             `initiated_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                             `service` varchar(255) DEFAULT NULL,
                             `status` varchar(255) DEFAULT NULL,
                             `metadata` json DEFAULT NULL,
                             `config` json DEFAULT NULL,
                             `data` json DEFAULT NULL,
                             `imported_data` json DEFAULT NULL,
                             `created_at` datetime NOT NULL,
                             `updated_at` datetime NOT NULL,
                             PRIMARY KEY (`id`),
                             KEY `token` (`token`),
                             KEY `initiated_by` (`initiated_by`),
                             CONSTRAINT `importers_ibfk_1` FOREIGN KEY (`token`) REFERENCES `api_tokens` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                             CONSTRAINT `importers_ibfk_2` FOREIGN KEY (`initiated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inbox_issues`
--

DROP TABLE IF EXISTS `inbox_issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inbox_issues` (
                                `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `inbox_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `id_issue_duplicate_to` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                `status` int DEFAULT '-2',
                                `snoozed_till` datetime DEFAULT NULL,
                                `source` text,
                                `created_at` datetime NOT NULL,
                                `updated_at` datetime NOT NULL,
                                PRIMARY KEY (`id`),
                                KEY `issue_id` (`issue_id`),
                                KEY `inbox_id` (`inbox_id`),
                                KEY `id_issue_duplicate_to` (`id_issue_duplicate_to`),
                                CONSTRAINT `inbox_issues_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                CONSTRAINT `inbox_issues_ibfk_2` FOREIGN KEY (`inbox_id`) REFERENCES `inboxes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                CONSTRAINT `inbox_issues_ibfk_3` FOREIGN KEY (`id_issue_duplicate_to`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inboxes`
--

DROP TABLE IF EXISTS `inboxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inboxes` (
                           `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                           `name` varchar(255) DEFAULT NULL,
                           `description` text,
                           `is_default` tinyint(1) DEFAULT '0',
                           `view_props` json DEFAULT NULL,
                           `created_at` datetime NOT NULL,
                           `updated_at` datetime NOT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue` (
                         `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `create_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `parent` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                         `state_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `estimate_point_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                         `name` varchar(255) NOT NULL,
                         `description` json DEFAULT NULL,
                         `description_html` longtext,
                         `description_stripped` mediumtext,
                         `priority` varchar(255) DEFAULT NULL,
                         `start_date` datetime DEFAULT NULL,
                         `target_date` datetime DEFAULT NULL,
                         `sequence_id` int DEFAULT '1',
                         `sort_order` int DEFAULT '65535',
                         `completed_at` time DEFAULT NULL,
                         `archived_at` datetime DEFAULT NULL,
                         `is_draft` tinyint(1) DEFAULT '0',
                         `created_at` datetime NOT NULL,
                         `updated_at` datetime NOT NULL,
                         PRIMARY KEY (`id`),
                         KEY `project_id` (`project_id`),
                         KEY `create_by` (`create_by`),
                         KEY `workspace_id` (`workspace_id`),
                         KEY `parent` (`parent`),
                         KEY `state_id` (`state_id`),
                         KEY `estimate_point_id` (`estimate_point_id`),
                         CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                         CONSTRAINT `issue_ibfk_2` FOREIGN KEY (`create_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                         CONSTRAINT `issue_ibfk_3` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                         CONSTRAINT `issue_ibfk_4` FOREIGN KEY (`parent`) REFERENCES `issue` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                         CONSTRAINT `issue_ibfk_5` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                         CONSTRAINT `issue_ibfk_6` FOREIGN KEY (`estimate_point_id`) REFERENCES `estimate_points` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_activities`
--

DROP TABLE IF EXISTS `issue_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_activities` (
                                    `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `issue_comment_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `actor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `verb` varchar(255) DEFAULT 'created',
                                    `field` varchar(255) DEFAULT NULL,
                                    `old_value` varchar(255) DEFAULT NULL,
                                    `new_value` varchar(255) DEFAULT NULL,
                                    `comment` varchar(255) DEFAULT NULL,
                                    `attachments` varchar(255) DEFAULT NULL,
                                    `old_identifier` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `new_identifier` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `epoch` int DEFAULT NULL,
                                    `created_at` datetime NOT NULL,
                                    `updated_at` datetime NOT NULL,
                                    PRIMARY KEY (`id`),
                                    KEY `issue_id` (`issue_id`),
                                    KEY `issue_comment_id` (`issue_comment_id`),
                                    KEY `actor` (`actor`),
                                    CONSTRAINT `issue_activities_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                    CONSTRAINT `issue_activities_ibfk_2` FOREIGN KEY (`issue_comment_id`) REFERENCES `issue_comments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                    CONSTRAINT `issue_activities_ibfk_3` FOREIGN KEY (`actor`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_assignees`
--

DROP TABLE IF EXISTS `issue_assignees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_assignees` (
                                   `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `assignee` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`issue_id`,`assignee`),
                                   UNIQUE KEY `issue_assignees_issue_id_assignee_unique` (`issue_id`,`assignee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_attachments`
--

DROP TABLE IF EXISTS `issue_attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_attachments` (
                                     `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                     `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                     `attributes` json DEFAULT NULL,
                                     `asset` varchar(255) NOT NULL,
                                     `created_at` datetime NOT NULL,
                                     `updated_at` datetime NOT NULL,
                                     PRIMARY KEY (`id`),
                                     KEY `issue_id` (`issue_id`),
                                     CONSTRAINT `issue_attachments_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_blockers`
--

DROP TABLE IF EXISTS `issue_blockers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_blockers` (
                                  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                  `block` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `blocked_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `created_at` datetime NOT NULL,
                                  `updated_at` datetime NOT NULL,
                                  `blocked_bys` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `blocks` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `block` (`block`),
                                  KEY `blocked_bys` (`blocked_bys`),
                                  KEY `blocks` (`blocks`),
                                  CONSTRAINT `issue_blockers_ibfk_1` FOREIGN KEY (`block`) REFERENCES `issue` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                  CONSTRAINT `issue_blockers_ibfk_2` FOREIGN KEY (`blocked_bys`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                  CONSTRAINT `issue_blockers_ibfk_3` FOREIGN KEY (`blocks`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_comments`
--

DROP TABLE IF EXISTS `issue_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_comments` (
                                  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                  `actor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `comment_stripped` varchar(255) DEFAULT NULL,
                                  `comment_json` json DEFAULT NULL,
                                  `comment_html` varchar(255) DEFAULT '<p></p>',
                                  `attachments` varchar(255) DEFAULT NULL,
                                  `access` varchar(255) DEFAULT NULL,
                                  `created_at` datetime NOT NULL,
                                  `updated_at` datetime NOT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `actor` (`actor`),
                                  KEY `issue_id` (`issue_id`),
                                  CONSTRAINT `issue_comments_ibfk_1` FOREIGN KEY (`actor`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                  CONSTRAINT `issue_comments_ibfk_2` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_label`
--

DROP TABLE IF EXISTS `issue_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_label` (
                               `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `label_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`issue_id`,`label_id`),
                               UNIQUE KEY `issue_label_label_id_issue_id_unique` (`issue_id`,`label_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_links`
--

DROP TABLE IF EXISTS `issue_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_links` (
                               `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                               `title` varchar(255) DEFAULT NULL,
                               `url` varchar(255) DEFAULT NULL,
                               `metadata` json DEFAULT NULL,
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`id`),
                               KEY `issue_id` (`issue_id`),
                               CONSTRAINT `issue_links_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_properties`
--

DROP TABLE IF EXISTS `issue_properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_properties` (
                                    `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `display_properties` json NOT NULL,
                                    `display_filters` json NOT NULL,
                                    `filters` json NOT NULL,
                                    `created_at` datetime NOT NULL,
                                    `updated_at` datetime NOT NULL,
                                    PRIMARY KEY (`id`),
                                    KEY `user_id` (`user_id`),
                                    CONSTRAINT `issue_properties_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_reactions`
--

DROP TABLE IF EXISTS `issue_reactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_reactions` (
                                   `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `actor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `reaction` varchar(255) DEFAULT NULL,
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `actor` (`actor`),
                                   KEY `issue_id` (`issue_id`),
                                   CONSTRAINT `issue_reactions_ibfk_1` FOREIGN KEY (`actor`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                   CONSTRAINT `issue_reactions_ibfk_2` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_relations`
--

DROP TABLE IF EXISTS `issue_relations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_relations` (
                                   `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `related_issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `relation_type` varchar(255) DEFAULT NULL,
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `issue_id` (`issue_id`),
                                   KEY `related_issue_id` (`related_issue_id`),
                                   CONSTRAINT `issue_relations_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                   CONSTRAINT `issue_relations_ibfk_2` FOREIGN KEY (`related_issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_sequences`
--

DROP TABLE IF EXISTS `issue_sequences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_sequences` (
                                   `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `sequence` bigint DEFAULT NULL,
                                   `deleted` tinyint(1) DEFAULT '0',
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `issue_id` (`issue_id`),
                                   CONSTRAINT `issue_sequences_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_subscribers`
--

DROP TABLE IF EXISTS `issue_subscribers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_subscribers` (
                                     `id` int NOT NULL AUTO_INCREMENT,
                                     `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                     `subscriber` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                     `created_at` datetime NOT NULL,
                                     `updated_at` datetime NOT NULL,
                                     PRIMARY KEY (`id`),
                                     KEY `issue_id` (`issue_id`),
                                     KEY `subscriber` (`subscriber`),
                                     CONSTRAINT `issue_subscribers_ibfk_1` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                     CONSTRAINT `issue_subscribers_ibfk_2` FOREIGN KEY (`subscriber`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_view_favorites`
--

DROP TABLE IF EXISTS `issue_view_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_view_favorites` (
                                        `id` int NOT NULL AUTO_INCREMENT,
                                        `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                        `view` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                        `created_at` datetime NOT NULL,
                                        `updated_at` datetime NOT NULL,
                                        PRIMARY KEY (`id`),
                                        KEY `user_id` (`user_id`),
                                        KEY `view` (`view`),
                                        CONSTRAINT `issue_view_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                        CONSTRAINT `issue_view_favorites_ibfk_2` FOREIGN KEY (`view`) REFERENCES `issue_views` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_views`
--

DROP TABLE IF EXISTS `issue_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_views` (
                               `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `name` varchar(255) NOT NULL,
                               `description` varchar(255) DEFAULT NULL,
                               `query` json DEFAULT NULL,
                               `access` int DEFAULT '1',
                               `query_data` json DEFAULT NULL,
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`id`),
                               KEY `workspace_id` (`workspace_id`),
                               KEY `created_by` (`created_by`),
                               CONSTRAINT `issue_views_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                               CONSTRAINT `issue_views_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `issue_votes`
--

DROP TABLE IF EXISTS `issue_votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_votes` (
                               `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `issue` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                               `actor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `vote` varchar(255) DEFAULT '1',
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `labels`
--

DROP TABLE IF EXISTS `labels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labels` (
                          `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                          `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `parent` varchar(255) DEFAULT NULL,
                          `name` varchar(255) DEFAULT NULL,
                          `description` varchar(255) DEFAULT NULL,
                          `color` varchar(255) DEFAULT NULL,
                          `created_at` datetime NOT NULL,
                          `updated_at` datetime NOT NULL,
                          PRIMARY KEY (`id`),
                          KEY `project_id` (`project_id`),
                          KEY `created_by` (`created_by`),
                          KEY `workspace_id` (`workspace_id`),
                          CONSTRAINT `labels_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                          CONSTRAINT `labels_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                          CONSTRAINT `labels_ibfk_3` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `module_favorites`
--

DROP TABLE IF EXISTS `module_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_favorites` (
                                    `id` int NOT NULL AUTO_INCREMENT,
                                    `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `module_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                    `created_at` datetime NOT NULL,
                                    `updated_at` datetime NOT NULL,
                                    PRIMARY KEY (`id`),
                                    KEY `user_id` (`user_id`),
                                    KEY `module_id` (`module_id`),
                                    CONSTRAINT `module_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                    CONSTRAINT `module_favorites_ibfk_2` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `module_issues`
--

DROP TABLE IF EXISTS `module_issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_issues` (
                                 `id` int NOT NULL AUTO_INCREMENT,
                                 `module_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                 `created_at` datetime NOT NULL,
                                 `updated_at` datetime NOT NULL,
                                 PRIMARY KEY (`id`),
                                 KEY `module_id` (`module_id`),
                                 KEY `issue_id` (`issue_id`),
                                 CONSTRAINT `module_issues_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON UPDATE CASCADE,
                                 CONSTRAINT `module_issues_ibfk_2` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `module_links`
--

DROP TABLE IF EXISTS `module_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_links` (
                                `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `module_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                `title` varchar(255) DEFAULT NULL,
                                `url` varchar(255) DEFAULT NULL,
                                `metadata` json DEFAULT NULL,
                                `created_at` datetime NOT NULL,
                                `updated_at` datetime NOT NULL,
                                PRIMARY KEY (`id`),
                                KEY `module_id` (`module_id`),
                                CONSTRAINT `module_links_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `module_members`
--

DROP TABLE IF EXISTS `module_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_members` (
                                  `id` int NOT NULL AUTO_INCREMENT,
                                  `module_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `member` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                  `created_at` datetime NOT NULL,
                                  `updated_at` datetime NOT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `module_id` (`module_id`),
                                  KEY `member` (`member`),
                                  CONSTRAINT `module_members_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                  CONSTRAINT `module_members_ibfk_2` FOREIGN KEY (`member`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
                           `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                           `lead` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                           `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                           `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                           `member` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                           `name` varchar(255) NOT NULL,
                           `description` varchar(255) DEFAULT NULL,
                           `description_text` json DEFAULT NULL,
                           `description_html` json DEFAULT NULL,
                           `start_date` datetime DEFAULT NULL,
                           `target_date` datetime DEFAULT NULL,
                           `status` varchar(255) DEFAULT 'planned',
                           `view_props` json DEFAULT NULL,
                           `sort_order` float DEFAULT NULL,
                           `created_at` datetime NOT NULL,
                           `updated_at` datetime NOT NULL,
                           PRIMARY KEY (`id`),
                           KEY `lead` (`lead`),
                           KEY `project_id` (`project_id`),
                           KEY `workspace_id` (`workspace_id`),
                           KEY `member` (`member`),
                           CONSTRAINT `modules_ibfk_1` FOREIGN KEY (`lead`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                           CONSTRAINT `modules_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                           CONSTRAINT `modules_ibfk_3` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                           CONSTRAINT `modules_ibfk_4` FOREIGN KEY (`member`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `module_user_properties`
--

DROP TABLE IF EXISTS `module_user_properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module_user_properties` (
                                          `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                          `module_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                          `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                          `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                          `filters` json DEFAULT NULL,
                                          `display_filters` json DEFAULT NULL,
                                          `display_properties` json DEFAULT NULL,
                                          `created_at` datetime NOT NULL,
                                          `updated_at` datetime NOT NULL,
                                          PRIMARY KEY (`id`),
                                          KEY `module_id` (`module_id`),
                                          KEY `user_id` (`user_id`),
                                          KEY `project_id` (`project_id`),
                                          CONSTRAINT `module_user_properties_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                          CONSTRAINT `module_user_properties_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                          CONSTRAINT `module_user_properties_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
                                 `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                 `triggered_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                 `receiver` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `data` json DEFAULT NULL,
                                 `entity_identifier` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                 `entity_name` varchar(255) NOT NULL,
                                 `title` varchar(255) NOT NULL,
                                 `message` json DEFAULT NULL,
                                 `message_html` varchar(255) DEFAULT '<p></p>',
                                 `message_stripped` varchar(255) DEFAULT NULL,
                                 `sender` varchar(255) DEFAULT NULL,
                                 `read_at` datetime DEFAULT NULL,
                                 `snoozed_till` datetime DEFAULT NULL,
                                 `archived_at` datetime DEFAULT NULL,
                                 `created_at` datetime NOT NULL,
                                 `updated_at` datetime NOT NULL,
                                 PRIMARY KEY (`id`),
                                 KEY `workspace_id` (`workspace_id`),
                                 KEY `project_id` (`project_id`),
                                 KEY `triggered_by` (`triggered_by`),
                                 KEY `receiver` (`receiver`),
                                 CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                 CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                 CONSTRAINT `notifications_ibfk_3` FOREIGN KEY (`triggered_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                 CONSTRAINT `notifications_ibfk_4` FOREIGN KEY (`receiver`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_blocks`
--

DROP TABLE IF EXISTS `page_blocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_blocks` (
                               `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `page_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                               `issue_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                               `name` varchar(255) NOT NULL,
                               `description` json DEFAULT NULL,
                               `description_html` varchar(255) DEFAULT '<p></p>',
                               `description_stripped` varchar(255) DEFAULT NULL,
                               `completed_at` datetime DEFAULT NULL,
                               `sort_order` varchar(255) DEFAULT '65535',
                               `sync` tinyint(1) DEFAULT '1',
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`id`),
                               KEY `page_id` (`page_id`),
                               KEY `issue_id` (`issue_id`),
                               CONSTRAINT `page_blocks_ibfk_1` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                               CONSTRAINT `page_blocks_ibfk_2` FOREIGN KEY (`issue_id`) REFERENCES `issue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_favorites`
--

DROP TABLE IF EXISTS `page_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_favorites` (
                                  `id` int NOT NULL AUTO_INCREMENT,
                                  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `page_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                  `created_at` datetime NOT NULL,
                                  `updated_at` datetime NOT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `user_id` (`user_id`),
                                  KEY `page_id` (`page_id`),
                                  CONSTRAINT `page_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                  CONSTRAINT `page_favorites_ibfk_2` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_labels`
--

DROP TABLE IF EXISTS `page_labels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_labels` (
                               `label` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `page` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                               `created_at` datetime NOT NULL,
                               `updated_at` datetime NOT NULL,
                               PRIMARY KEY (`label`,`page`),
                               UNIQUE KEY `page_labels_page_label_unique` (`label`,`page`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
                         `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `owned_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                         `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                         `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                         `name` varchar(255) NOT NULL,
                         `description` json DEFAULT NULL,
                         `description_html` longtext,
                         `description_stripped` text,
                         `access` varchar(255) DEFAULT NULL,
                         `color` varchar(255) DEFAULT NULL,
                         `created_at` datetime NOT NULL,
                         `updated_at` datetime NOT NULL,
                         PRIMARY KEY (`id`),
                         KEY `owned_by` (`owned_by`),
                         KEY `project_id` (`project_id`),
                         KEY `workspace_id` (`workspace_id`),
                         CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`owned_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                         CONSTRAINT `pages_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                         CONSTRAINT `pages_ibfk_3` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_deploy_boards`
--

DROP TABLE IF EXISTS `project_deploy_boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_deploy_boards` (
                                         `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                         `inbox_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                         `anchor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                         `comments` tinyint(1) DEFAULT '0',
                                         `reactions` tinyint(1) DEFAULT '0',
                                         `votes` tinyint(1) DEFAULT '0',
                                         `views` json DEFAULT NULL,
                                         `created_at` datetime NOT NULL,
                                         `updated_at` datetime NOT NULL,
                                         PRIMARY KEY (`id`),
                                         KEY `inbox_id` (`inbox_id`),
                                         CONSTRAINT `project_deploy_boards_ibfk_1` FOREIGN KEY (`inbox_id`) REFERENCES `inboxes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_favorites`
--

DROP TABLE IF EXISTS `project_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_favorites` (
                                     `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                     `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                     `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                     `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                     `created_at` datetime NOT NULL,
                                     `updated_at` datetime NOT NULL,
                                     PRIMARY KEY (`id`),
                                     UNIQUE KEY `project_favorite` (`user_id`,`project_id`),
                                     KEY `workspace_id` (`workspace_id`),
                                     KEY `project_id` (`project_id`),
                                     CONSTRAINT `project_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                     CONSTRAINT `project_favorites_ibfk_2` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                     CONSTRAINT `project_favorites_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_identifiers`
--

DROP TABLE IF EXISTS `project_identifiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_identifiers` (
                                       `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                       `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                       `projectId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                       `name` varchar(255) DEFAULT NULL,
                                       `created_at` datetime NOT NULL,
                                       `updated_at` datetime NOT NULL,
                                       PRIMARY KEY (`id`),
                                       KEY `workspace_id` (`workspace_id`),
                                       KEY `projectId` (`projectId`),
                                       CONSTRAINT `project_identifiers_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                       CONSTRAINT `project_identifiers_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_member_invites`
--

DROP TABLE IF EXISTS `project_member_invites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_member_invites` (
                                          `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                          `email` varchar(255) NOT NULL,
                                          `accepted` tinyint(1) DEFAULT '0',
                                          `token` varchar(255) NOT NULL,
                                          `message` text,
                                          `responded_at` datetime DEFAULT NULL,
                                          `role` int DEFAULT '10',
                                          `created_at` datetime NOT NULL,
                                          `updated_at` datetime NOT NULL,
                                          PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_members`
--

DROP TABLE IF EXISTS `project_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_members` (
                                   `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `member` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                   `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                                   `comment` varchar(255) DEFAULT NULL,
                                   `role` int DEFAULT '10',
                                   `view_props` json DEFAULT NULL,
                                   `default_props` json DEFAULT NULL,
                                   `preferences` json DEFAULT NULL,
                                   `sort_order` varchar(255) DEFAULT '65535',
                                   `created_at` datetime NOT NULL,
                                   `updated_at` datetime NOT NULL,
                                   PRIMARY KEY (`id`),
                                   KEY `member` (`member`),
                                   KEY `project_id` (`project_id`),
                                   KEY `workspace_id` (`workspace_id`),
                                   CONSTRAINT `project_members_ibfk_1` FOREIGN KEY (`member`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                   CONSTRAINT `project_members_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                   CONSTRAINT `project_members_ibfk_3` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_public_members`
--

DROP TABLE IF EXISTS `project_public_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_public_members` (
                                          `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                          `member` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                          `created_at` datetime NOT NULL,
                                          `updated_at` datetime NOT NULL,
                                          PRIMARY KEY (`id`),
                                          KEY `member` (`member`),
                                          CONSTRAINT `project_public_members_ibfk_1` FOREIGN KEY (`member`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
                            `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                            `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                            `estimate_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                            `default_assignee` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                            `project_lead` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                            `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                            `name` varchar(255) NOT NULL,
                            `description` varchar(255) DEFAULT NULL,
                            `description_text` json DEFAULT NULL,
                            `description_html` text,
                            `network` int DEFAULT '1',
                            `identifier` varchar(255) NOT NULL,
                            `emoji` varchar(255) DEFAULT NULL,
                            `icon_prop` json DEFAULT NULL,
                            `module_view` tinyint(1) DEFAULT '1',
                            `cycle_view` tinyint(1) DEFAULT '1',
                            `issue_views_view` tinyint(1) DEFAULT '1',
                            `page_view` tinyint(1) DEFAULT '1',
                            `inbox_view` tinyint(1) DEFAULT '1',
                            `cover_image` text,
                            `archive_in` int DEFAULT '0',
                            `close_in` int DEFAULT '0',
                            `created_at` datetime NOT NULL,
                            `updated_at` datetime NOT NULL,
                            PRIMARY KEY (`id`),
                            KEY `created_by` (`created_by`),
                            KEY `estimate_id` (`estimate_id`),
                            KEY `default_assignee` (`default_assignee`),
                            KEY `project_lead` (`project_lead`),
                            KEY `workspace_id` (`workspace_id`),
                            CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                            CONSTRAINT `projects_ibfk_2` FOREIGN KEY (`estimate_id`) REFERENCES `estimates` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                            CONSTRAINT `projects_ibfk_3` FOREIGN KEY (`default_assignee`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                            CONSTRAINT `projects_ibfk_4` FOREIGN KEY (`project_lead`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                            CONSTRAINT `projects_ibfk_5` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_views`
--

DROP TABLE IF EXISTS `project_views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_views` (
                                 `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `name` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                 `description` varchar(255) DEFAULT NULL,
                                 `query` json DEFAULT NULL,
                                 `access` varchar(255) DEFAULT '1',
                                 `query_data` json DEFAULT NULL,
                                 `created_at` datetime NOT NULL,
                                 `updated_at` datetime NOT NULL,
                                 PRIMARY KEY (`id`),
                                 KEY `workspace_id` (`workspace_id`),
                                 KEY `created_by` (`created_by`),
                                 KEY `project_id` (`project_id`),
                                 CONSTRAINT `project_views_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON UPDATE CASCADE,
                                 CONSTRAINT `project_views_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
                                 CONSTRAINT `project_views_ibfk_3` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `social_login_connections`
--

DROP TABLE IF EXISTS `social_login_connections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_login_connections` (
                                            `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                            `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                            `medium` varchar(255) DEFAULT NULL,
                                            `last_login_at` datetime DEFAULT NULL,
                                            `last_received_at` datetime DEFAULT NULL,
                                            `token_data` json DEFAULT NULL,
                                            `extra_data` json DEFAULT NULL,
                                            `created_at` datetime NOT NULL,
                                            PRIMARY KEY (`id`),
                                            KEY `user_id` (`user_id`),
                                            CONSTRAINT `social_login_connections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
                          `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                          `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `created_by` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                          `name` varchar(255) NOT NULL,
                          `description` text,
                          `color` varchar(255) NOT NULL,
                          `slug` varchar(255) DEFAULT NULL,
                          `sequence` float DEFAULT '65535',
                          `group_name` varchar(255) NOT NULL,
                          `is_default` tinyint(1) DEFAULT '0',
                          `created_at` datetime NOT NULL,
                          `updated_at` datetime NOT NULL,
                          PRIMARY KEY (`id`),
                          KEY `project_id` (`project_id`),
                          KEY `created_by` (`created_by`),
                          CONSTRAINT `states_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                          CONSTRAINT `states_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team_members`
--

DROP TABLE IF EXISTS `team_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_members` (
                                `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `team_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `member` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                `created_at` datetime NOT NULL,
                                `updated_at` datetime NOT NULL,
                                PRIMARY KEY (`id`),
                                UNIQUE KEY `team_members_team_id_member_unique` (`team_id`,`member`),
                                KEY `workspace_id` (`workspace_id`),
                                KEY `member` (`member`),
                                CONSTRAINT `team_members_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                CONSTRAINT `team_members_ibfk_2` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                CONSTRAINT `team_members_ibfk_3` FOREIGN KEY (`member`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
                         `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `name` varchar(255) NOT NULL,
                         `description` text,
                         `created_at` datetime NOT NULL,
                         `updated_at` datetime NOT NULL,
                         PRIMARY KEY (`id`),
                         KEY `workspace_id` (`workspace_id`),
                         CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
                         `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                         `last_workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                         `username` varchar(255) NOT NULL,
                         `mobileNumber` varchar(255) DEFAULT NULL,
                         `email` varchar(255) NOT NULL,
                         `first_name` varchar(255) DEFAULT NULL,
                         `last_name` varchar(255) DEFAULT NULL,
                         `avatar` varchar(255) DEFAULT NULL,
                         `cover_image` varchar(255) DEFAULT NULL,
                         `last_location` varchar(255) DEFAULT NULL,
                         `created_location` varchar(255) DEFAULT NULL,
                         `is_superuser` tinyint(1) DEFAULT '0',
                         `is_managed` tinyint(1) DEFAULT '0',
                         `is_active` tinyint(1) DEFAULT '1',
                         `is_staff` tinyint(1) DEFAULT '0',
                         `is_email_verified` tinyint(1) DEFAULT '0',
                         `pin` varchar(255) DEFAULT '0',
                         `pin_time_expired` bigint DEFAULT NULL,
                         `is_onboarded` tinyint(1) DEFAULT '0',
                         `token` varchar(255) DEFAULT NULL,
                         `billing_address_country` varchar(255) DEFAULT 'VIETNAMESE',
                         `billing_address` varchar(255) DEFAULT NULL,
                         `has_billing_address` varchar(255) DEFAULT NULL,
                         `USER_TIMEZONE_CHOICES` varchar(255) DEFAULT NULL,
                         `user_timezone` date DEFAULT NULL,
                         `last_login_ip` varchar(255) DEFAULT NULL,
                         `last_logout_ip` varchar(255) DEFAULT NULL,
                         `last_login_medium` varchar(255) DEFAULT 'email',
                         `last_login_user_agent` varchar(255) DEFAULT NULL,
                         `token_updated_at` datetime DEFAULT NULL,
                         `my_issues_prop` json DEFAULT NULL,
                         `role` varchar(255) DEFAULT NULL,
                         `is_bot` tinyint(1) DEFAULT '0',
                         `theme` json DEFAULT NULL,
                         `display_name` varchar(255) DEFAULT NULL,
                         `is_tour_completed` tinyint(1) DEFAULT '0',
                         `onboarding_step` json DEFAULT NULL,
                         `last_logout_time` datetime NOT NULL,
                         `updated_at` datetime NOT NULL,
                         PRIMARY KEY (`id`),
                         UNIQUE KEY `username_unique` (`username`),
                         UNIQUE KEY `email_unique` (`email`),
                         KEY `last_workspace_id` (`last_workspace_id`),
                         CONSTRAINT `users_ibfk_1` FOREIGN KEY (`last_workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workspace_member_invites`
--

DROP TABLE IF EXISTS `workspace_member_invites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workspace_member_invites` (
                                            `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                            `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                            `email` varchar(255) NOT NULL,
                                            `accepted` tinyint(1) DEFAULT '0',
                                            `token` varchar(255) NOT NULL,
                                            `message` text,
                                            `responded_at` datetime DEFAULT NULL,
                                            `role` int DEFAULT NULL,
                                            `created_at` datetime NOT NULL,
                                            `updated_at` datetime NOT NULL,
                                            PRIMARY KEY (`id`),
                                            UNIQUE KEY `workspace-email` (`workspace_id`,`email`),
                                            CONSTRAINT `workspace_member_invites_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workspace_members`
--

DROP TABLE IF EXISTS `workspace_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workspace_members` (
                                     `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                     `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                     `member` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                     `role` int DEFAULT '10',
                                     `company_role` text,
                                     `view_props` json DEFAULT NULL,
                                     `default_props` json DEFAULT NULL,
                                     `is_active` tinyint(1) DEFAULT '1',
                                     `created_at` datetime NOT NULL,
                                     `updated_at` datetime NOT NULL,
                                     PRIMARY KEY (`id`),
                                     KEY `workspace_id` (`workspace_id`),
                                     KEY `member` (`member`),
                                     CONSTRAINT `workspace_members_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                     CONSTRAINT `workspace_members_ibfk_2` FOREIGN KEY (`member`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workspaces`
--

DROP TABLE IF EXISTS `workspaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workspaces` (
                              `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                              `owner` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                              `name` varchar(255) NOT NULL,
                              `logo` varchar(255) DEFAULT NULL,
                              `slug` char(255) DEFAULT NULL,
                              `organization_size` varchar(255) DEFAULT NULL,
                              `created_at` datetime NOT NULL,
                              `updated_at` datetime NOT NULL,
                              `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
                              PRIMARY KEY (`id`),
                              UNIQUE KEY `slug_unique` (`slug`),
                              KEY `owner` (`owner`),
                              KEY `workspace_id` (`workspace_id`),
                              CONSTRAINT `workspaces_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                              CONSTRAINT `workspaces_ibfk_2` FOREIGN KEY (`workspace_id`) REFERENCES `issue_views` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workspace_themes`
--

DROP TABLE IF EXISTS `workspace_themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workspace_themes` (
                                    `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `workspace_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `actor` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                                    `name` text,
                                    `colors` json DEFAULT NULL,
                                    `created_at` datetime NOT NULL,
                                    `updated_at` datetime NOT NULL,
                                    PRIMARY KEY (`id`),
                                    KEY `workspace_id` (`workspace_id`),
                                    KEY `actor` (`actor`),
                                    CONSTRAINT `workspace_themes_ibfk_1` FOREIGN KEY (`workspace_id`) REFERENCES `workspaces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                    CONSTRAINT `workspace_themes_ibfk_2` FOREIGN KEY (`actor`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-14 22:05:08
