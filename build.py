import yaml
from pathlib import Path
import shutil

from mdutils.mdutils import MdUtils


class Document():

    prettier = {
        "storage_var": "storage",
        "namespace": "internal",
    }

    def __init__(self, root: Path, name: str, header: str, data: dict) -> None:
        self._root = root
        self._name = name
        self._header = header
        self._data = data

        print(self._root)

        self._functions = {}
        self._functions.update(self.constructors)
        self._functions.update(self.views)
        self._functions.update(self.externals)
        self._functions.update(self.events)
        self._functions.update(self.storages)
        self._functions.update(self.internals)

    @classmethod
    def from_yaml(cls, root, path):
        name = path.stem
        header = f"{name.capitalize()}"
        with open(path.with_suffix(".yaml"), "r") as yamlpath:
            data = yaml.safe_load(yamlpath)
        return cls(root, name, header, data)

    @staticmethod
    def filter(data, key):
        keyword = Document.prettier.get(key, key)
        return {
            keyword: [
                func
                for func in data
                if func.get("attributeName").startswith(key)
            ]
        }

    @property
    def constructors(self):
        functype = "constructor"
        return self.filter(self._data, functype)

    @property
    def views(self):
        functype = "view"
        return self.filter(self._data, functype)

    @property
    def externals(self):
        functype = "external"
        return self.filter(self._data, functype)

    @property
    def events(self):
        functype = "event"
        return self.filter(self._data, functype)

    @property
    def storages(self):
        functype = "storage_var"
        return self.filter(self._data, functype)

    @property
    def internals(self):
        functype = "namespace"
        return self.filter(self._data, functype)

    def create_api_page(self):

        filepath = (self._root / self._name).with_suffix('.md')
        markdown = MdUtils(file_name=filepath.as_posix())
        markdown.new_header(
            level=1, title=self._name.capitalize().replace("_", " "))

        for functype, functions in self._functions.items():
            if not functions:
                continue

            markdown.new_header(
                level=2, title=functype.capitalize().replace("_", " "))

            for function in functions:
                function_name = function.get("functionName")
                function_signature = function.get("functionSignature")
                function_comment = function.get("functionComment")
                self.add_function(
                    markdown,
                    function_name,
                    function_signature,
                    function_comment
                )

        markdown.create_md_file()

    def add_function(self, markdown, function_name, function_signature, function_comment):

        name = function_name.get("name")
        markdown.new_header(level=3, title=f"`{name}`")

        descriptions = function_comment.get("desc") or []
        description = " ".join(desc.get("desc") for desc in descriptions)
        # TODO: to be fixed in cairo comments
        markdown.new_line(description.replace("<>", "!="))

        for method, args in function_signature.items():
            # hide implicit arguments
            if args is None or all(not arg.get('name') for arg in args):
                continue

            markdown.new_header(
                level=4, title=method.capitalize().replace("args", " arguments"))

            # remove empty names
            args = [arg for arg in args if arg.get("name")]

            argcoms = {
                arg.get("name"): arg
                for arg in (function_comment.get(method) or [])
            }

            markdown.new_line("```python")
            for arg in args:
                # arg.update(argcoms.get(arg.get('name'), {}))
                argcom = argcoms.get(arg.get('name'), {})
                argname = argcom.get('name') or arg.get('name')
                argtype = argcom.get('type') or arg.get('type')
                argdesc = argcom.get('desc', '')

                argstr = f"{argname} ({argtype})" if argtype else argname
                argstr = f"{argstr}: {argdesc}" if argdesc else argstr
                markdown.new_line(argstr)
            markdown.new_line("```")


# Clean up docs folder before generation
source = Path("./data")
target = Path("./docs")
if target.exists():
    shutil.rmtree(target)
shutil.copytree(source, target)

# Capitalize all subfolders
for path in reversed(list(target.glob("./**"))):
    if path is not target:
        new = path.parent / path.stem.capitalize()
        shutil.move(path, new)

# Create markdown for each yaml files
for path in target.glob("**/*.yaml"):
    document = Document.from_yaml(path.parent, path)
    document.create_api_page()
    path.unlink()
