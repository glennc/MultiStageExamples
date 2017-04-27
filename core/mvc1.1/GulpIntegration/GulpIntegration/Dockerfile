#Compile C#
FROM microsoft/aspnetcore-build:1.1.1 as buildenv

WORKDIR /app
ARG configuration=Release

COPY ./*.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c $configuration -o /out

#Prepare my clientside assets, minify, bundle, transpile, etc with gulp.
FROM node:alpine as clientenv

RUN npm install -g gulp
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN gulp

#Prepare my runtime image with the bits I need from above.
FROM microsoft/aspnetcore:1.1.1

WORKDIR /app
COPY --from=buildenv /out .
COPY --from=clientenv /app/wwwroot ./wwwroot

ENTRYPOINT ["dotnet", "GulpIntegration.dll"]