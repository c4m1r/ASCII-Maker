# 🤝 Contributing to ASCII Maker

First off, thank you for considering contributing to ASCII Maker! It's people like you that make this project better for everyone. 🎉

This document provides guidelines for contributing to the project. Following these guidelines helps communicate that you respect the time of the developers managing and developing this open source project.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by basic principles of respect and professionalism:

- **Be respectful** - Treat everyone with respect and kindness
- **Be collaborative** - Work together and help each other
- **Be patient** - Remember that people have different skill levels and backgrounds
- **Be constructive** - Provide helpful feedback and suggestions

---

## 🎯 How Can I Contribute?

### 🐛 Reporting Bugs

Found a bug? Help us fix it!

**Before submitting a bug report:**
- Check the [existing issues](https://github.com/c4m1r/ASCII-Maker/issues) to avoid duplicates
- Try the latest version to see if the bug still exists
- Gather as much information as possible

**When submitting a bug report, include:**
- Clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots or error messages (if applicable)
- Your environment (OS, browser, Node.js version, Python version)
- Any relevant logs or outputs

**Example:**
```markdown
**Bug:** ASCII frames not loading on mobile Safari

**Steps to Reproduce:**
1. Open https://c4m1r.github.io/ASCII-Maker/ on iPhone Safari
2. Wait for frames to load
3. Observe error in console

**Expected:** Frames should load and animation should play
**Actual:** 404 errors for frame files

**Environment:**
- iOS 17.2, Safari 17
- iPhone 13 Pro
```

---

### 💡 Suggesting Features

Have an idea to make ASCII Maker better?

**Before suggesting a feature:**
- Check the [ROADMAP.md](ROADMAP.md) to see if it's already planned
- Search existing issues and discussions
- Consider if it aligns with the project's goals

**When suggesting a feature:**
- Use a clear and descriptive title
- Explain the problem it solves
- Describe the proposed solution
- Consider alternatives
- Add mockups or examples if helpful

**Example:**
```markdown
**Feature:** Batch video conversion

**Problem:** Converting multiple videos requires running the script multiple times

**Proposed Solution:** 
Add a `--batch` flag that accepts a directory of videos and converts them all

**Benefits:**
- Saves time for users with many videos
- Consistent settings across conversions
```

---

### 🔧 Code Contributions

We love code contributions! Here's what we're looking for:

- **Bug fixes** - Fix reported issues
- **Feature implementations** - From the roadmap or approved proposals
- **Performance improvements** - Optimize existing code
- **Documentation** - Improve guides, comments, examples
- **Tests** - Add or improve test coverage
- **Refactoring** - Clean up code while maintaining functionality

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** 18+ and npm
- **Python** 3.8+
- **Git**

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ASCII-Maker.git
   cd ASCII-Maker
   ```
3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/c4m1r/ASCII-Maker.git
   ```

### Install Dependencies

**Frontend (React/Vite):**
```bash
npm install
```

**Python (for conversion scripts):**
```bash
pip install -r requirements.txt
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to see your changes live.

---

## 🔄 Development Workflow

1. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes** following the coding standards

3. **Test your changes:**
   ```bash
   npm run build  # Test production build
   # Test conversion scripts if modified
   ```

4. **Commit your changes** (see commit message guidelines below)

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

---

## 💻 Coding Standards

### TypeScript/React

- Use **TypeScript** for type safety
- Follow **React best practices** (hooks, functional components)
- Use **Tailwind CSS** for styling (avoid inline styles when possible)
- Keep components **small and focused**
- Add **comments** for complex logic
- Use **meaningful variable names**

**Example:**
```typescript
// Good
const [isPlaying, setIsPlaying] = useState(false);
const frameInterval = 1000 / fps;

// Avoid
const [p, setP] = useState(false);
const fi = 1000 / f;
```

### Python

- Follow **PEP 8** style guide
- Use **type hints** where appropriate
- Add **docstrings** to functions
- Keep functions **focused and small**
- Handle **errors gracefully**

**Example:**
```python
def convert_frame(image: np.ndarray, charset: str) -> str:
    """
    Convert image frame to ASCII art.
    
    Args:
        image: Input image as numpy array
        charset: Character set to use for conversion
        
    Returns:
        ASCII art as string
    """
    # Implementation
```

### CSS

- Use **Tailwind utility classes** first
- Custom CSS only when necessary (in `index.css`)
- Follow **BEM naming** for custom classes
- Add **comments** for complex styles

---

## 📝 Commit Messages

Write clear, meaningful commit messages:

### Format:
```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

### Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Examples:

**Good:**
```
feat: add custom character set selector

Allow users to choose from predefined character sets or create their own.
Includes UI component and conversion logic updates.

Closes #42
```

**Good:**
```
fix: resolve frame loading 404 errors on GitHub Pages

Update paths to use import.meta.env.BASE_URL for correct asset loading
when deployed to subdirectory.
```

**Avoid:**
```
updated stuff
fix bug
changes
```

---

## 🔀 Pull Request Process

1. **Update documentation** if needed (README, comments, etc.)
2. **Test thoroughly** - ensure your changes work as expected
3. **Keep PRs focused** - one feature/fix per PR
4. **Provide context** in the PR description:
   - What does this PR do?
   - Why is it needed?
   - How was it tested?
   - Screenshots (if UI changes)
   - Related issues

### PR Template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Tested in development and production build
```

### Review Process

- Maintainers will review your PR
- Address any requested changes
- Once approved, your PR will be merged
- **Thank you for your contribution!** 🎉

---

## 🧪 Testing

### Manual Testing

Before submitting:
- [ ] Test in development mode (`npm run dev`)
- [ ] Test production build (`npm run build` then check `dist/`)
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile if UI changes
- [ ] Test conversion scripts if Python code changed

### Future: Automated Tests

We're planning to add automated testing. Contributions to set up testing infrastructure are welcome!

---

## 📚 Documentation

Good documentation is as important as good code!

### When to Update Documentation:

- Adding new features → Update README.md
- Changing CLI arguments → Update help text and docs
- Adding configuration options → Document in relevant files
- Fixing bugs that were unclear → Clarify in docs

### Documentation Style:

- **Clear and concise** - Get to the point
- **Examples** - Show, don't just tell
- **User-focused** - Think about what users need to know
- **Up-to-date** - Remove outdated information

---

## 🏆 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes (for significant contributions)
- Project credits

---

## ❓ Questions?

Not sure about something? Don't hesitate to ask!

- 💬 [Open a Discussion](https://github.com/c4m1r/ASCII-Maker/discussions)
- 📧 Comment on relevant issues
- 💡 Ask in your PR if it's related to your contribution

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (see [LICENSE](LICENSE) file).

---

**Thank you for making ASCII Maker better!** 🚀✨

Your contributions, no matter how small, are valued and appreciated. Happy coding! 💻

