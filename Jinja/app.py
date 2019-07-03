from jinja2 import Environment, FileSystemLoader;

templateLoader = FileSystemLoader(searchpath="./")
#Loads templates from the file system. This loader 
#can find templates in folders on the file system and is the preferred way to load them.
#The loader takes the path to the templates as string

templateEnv = Environment(loader=templateLoader)
#Environment. Instances of this class are used to
#store the configuration and global objects, and are
#used to load templates from the file system or other
#locations. Even if you are creating templates from 
#strings by using the constructor of Template class, 
#an environment is created automatically for you, albeit a shared one.


TEMPLATE_FILE = "model_template.jinja2"

template = templateEnv.get_template(TEMPLATE_FILE)
#To load a template from this environment you just 
#have to call the get_template() method which then returns the loaded Template

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