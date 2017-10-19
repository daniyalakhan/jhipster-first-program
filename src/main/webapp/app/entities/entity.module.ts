import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterfirstprogramBlogModule } from './blog/blog.module';
import { JhipsterfirstprogramEntryModule } from './entry/entry.module';
import { JhipsterfirstprogramTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterfirstprogramBlogModule,
        JhipsterfirstprogramEntryModule,
        JhipsterfirstprogramTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterfirstprogramEntityModule {}
