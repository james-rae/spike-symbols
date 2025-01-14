// pattern to avoid circular imports
// https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de

/*
tldr if not wanting to read the article.
This file imports & exports every project module in the safest order (least dependent to most dependent).
Typically things are fine unless dealing with modules that generate singletons who
are using other modules in their constructor.
Every other module does their imports from this file.
Things in package.json don't apply, just import them as you would.
*/

export * from './fun-module';

// To do default exports, use this

/*
import NameYouWant from './path/default-export-module';

export { NameYouWant };
*/
