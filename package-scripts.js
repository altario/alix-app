module.exports = {
  scripts: {
    deploy: {
      s3: "nps build.s3 && AWS_ACCESS_KEY_ID=AKIAJN6KV56DSCESEE3Q AWS_SECRET_ACCESS_KEY=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 s3-website deploy",
    },
    build: {
      s3: "cd alix-app && ng build --prod --output-path ../s3website"
    }
  }
}
