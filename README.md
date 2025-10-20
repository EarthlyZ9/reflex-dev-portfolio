# How to Run

```bash
poetry shell
poetry run reflex run
```

# Deployment

처음에는 GitHub Pages를 사용했으나 현재는 Reflex Deploy를 사용한다.

```bash
poetry run reflex deploy --project [app-id] --env NOTION_API_KEY=[secret] --env ENVIRONMENT=production
```