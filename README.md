# mkdocs-material

To update this repo and still keep the versioning using [mike] run
* This is how i did it, it's not the only way

```sh
# run it locally and make you changes, accessable in http://localhost:8000/
mike serve


# set it as the new version
mike deploy --update-aliases X.Y.Z latest

# psuh to git
git push
```

[mike]: <https://github.com/jimporter/mike>
