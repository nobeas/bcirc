# B-CIRC website

A static, multi-page site for the Botswana Circular Energy Storage Platform. No build step, no
server, no database. Every page is plain HTML that pulls its text and numbers from one file.

## The one file you edit

`assets/js/content.js`

Headings, device tables, the carbon matrix, courses, budget lines, news posts and contact details
all live there. Change the text between the quote marks, save, commit. Every page updates.

Nothing else needs touching for normal updates. The other files are:

| File | What it is |
|---|---|
| `assets/js/site.js` | Builds the header, footer, modals and every data block. Leave alone. |
| `assets/js/theme.js` | The five brand colours. Edit only to rebrand. |
| `assets/css/site.css` | The hexagon background and scroll animation. |
| `*.html` | One thin shell per page. Edit only to change page structure. |

## Publishing on GitHub Pages

1. Create a GitHub account, then a new **public** repository. Any name works; `bcirc-site` is fine.
2. On the empty repository page choose **uploading an existing file**. Drag in the *contents* of
   this folder, not the folder itself. `index.html` must sit at the top level of the repository.
3. Commit.
4. Go to **Settings** then **Pages** in the left sidebar.
5. Under *Build and deployment*, set Source to **Deploy from a branch**, branch to **main**,
   folder to **/ (root)**. Save.
6. Wait about a minute, then reload. The URL appears at the top:
   `https://YOUR-USERNAME.github.io/bcirc-site/`

## Editing after it is live

You never need a code editor or git on your machine.

1. Open the repository on github.com.
2. Click `assets` then `js` then `content.js`.
3. Click the pencil icon.
4. Make the change.
5. Scroll down, write a short note like "updated supercapacitor result", click **Commit changes**.
6. Wait about a minute and reload the site.

If the site goes blank after an edit you broke the punctuation in `content.js`. Press F12 in the
browser, read the red error, and fix the line it names. Usually a missing comma or quote mark.
GitHub keeps every version, so you can always revert from the **History** button.

## Adding a news post

In `content.js`, find `news:` and copy one `{ ... }` block. Paste it above the others, change the
date, tag, title and body. Newest first.

## Adding a fifth device or a seventh carbon architecture

Same idea. Copy a block inside `devices:` or `carbons:`, change the values. The tabs, the ranking
buttons and the comparison dots all rebuild themselves. Carbon ratings are 0 to 3.

## Making the forms actually send

The three forms are in demo mode: they show a success message and send nothing. To receive the
submissions:

1. Sign up free at formspree.io.
2. Create a form, copy the endpoint URL, which looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `forms:` in `content.js`, against `booking`, `dossier` or `newsletter`.
4. Commit. Submissions now arrive by email.

Free tier allows 50 submissions a month. Alternatives that work the same way: Getform, Basin,
Web3Forms.

## A custom domain

1. Buy the domain, for example `bcirc.co.bw`.
2. At your domain registrar add a CNAME record pointing `www` to `YOUR-USERNAME.github.io`, and
   four A records for the bare domain pointing to 185.199.108.153, 185.199.109.153,
   185.199.110.153 and 185.199.111.153.
3. In the repository, Settings then Pages, enter the domain under *Custom domain* and tick
   *Enforce HTTPS*.

## Known limits of static hosting

- Anything placed in `files/` is public to anyone who guesses the URL. A "gated" dossier download
  is not private. Have the form email the document instead, which is how this site is wired.
- No login, no database, no server-side code. If you later need a real data room with per-user
  access, that needs a backend or a service such as DocSend.
- Tailwind loads from a CDN, so the first paint needs an internet connection. Fine for a public
  site; if you need the site to work fully offline, that is the one thing worth changing.
