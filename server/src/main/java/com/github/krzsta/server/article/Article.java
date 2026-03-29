package com.github.krzsta.server.article;

import java.time.OffsetDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "articles")
public class Article {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private String category;

    @Column(name = "published_at")
    private OffsetDateTime publishedAt;

    @Column(name = "fetched_at")
    private OffsetDateTime fetchedAt;

    public Article() {}

    public Article(String title, String url, String category, OffsetDateTime publishedAt, OffsetDateTime fetchedAt) {
        this.title = title;
        this.url = url;
        this.category = category;
        this.publishedAt = publishedAt;
        this.fetchedAt = fetchedAt;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getUrl() { return url; }
    public String getCategory() { return category; }
    public OffsetDateTime getPublishedAt() { return publishedAt; }
    public OffsetDateTime getFetchedAt() { return fetchedAt; }
}
