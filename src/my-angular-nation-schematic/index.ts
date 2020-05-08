import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myAngularNationSchematic(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Hey I am running your schemactics!');
    const filepath = 'angular-nation.ts';
    tree.create(filepath,'Angular Nation is the best platform to meet friend');
    return tree;
  };
}
