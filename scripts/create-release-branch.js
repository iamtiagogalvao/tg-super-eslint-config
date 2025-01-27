import { execSync } from 'node:child_process'

/**
 * Creates a new release branch.
 */
async function createReleaseBranch() {
  try {
    const versionType = process.argv[2] || 'patch'

    if (!versionType || !['patch', 'minor', 'major'].includes(versionType)) {
      throw new Error("Invalid version type. Use 'patch', 'minor', or 'major'.")
    }

    const isDryRun = process.env.DRY_RUN === 'true'

    /* eslint-disable sonarjs/os-command */
    const dryRunOutput = execSync(`yarn standard-version --dry-run --release-as ${versionType}`, {
      encoding: 'utf8'
    }).trim()

    const versionMatch = dryRunOutput.match(/tagging release v(\d+\.\d+\.\d+)/)

    if (!versionMatch) {
      throw new Error('Failed to determine version.')
    }

    const version = versionMatch[1]
    const branchName = `release/${version}-${versionType}`

    if (isDryRun) {
      console.log(`[DRY RUN] Would create and switch to branch: ${branchName}`)
    } else {
      execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' })
      console.log(`✅ Created and checked out branch: ${branchName}`)
    }
    /* eslint-enable sonarjs/os-command */
  } catch (error) {
    throw new Error(`❌ Error creating release branch: ${error.message}`)
  }
}

await createReleaseBranch()
