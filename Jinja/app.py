from jinja2 import Template

with open('model_template.jinja2') as file_:
    template = Template(file_.read())

rendered = template.render(
    modelLibs=["const mongoose = require('mongoose')",
                "const Schema = mongoose.Schema"],
    entity="miembro",
    entityAtrDictList=[{'name':'nombre','type': 'String', 'required': 'true', 'max': '100'},
                        {'name':'estado','type': 'String', 'required': 'true', 'max': '50'},
                        {'name':'codigo','type': 'Number', 'required': 'true'}],
    saltoLinea="\n"
)

print(rendered)