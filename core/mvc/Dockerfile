FROM microsoft/dotnet-nightly:2.0-sdk as buildenv

WORKDIR /app
ARG Configuration=Release

COPY ./*.csproj .
COPY ./NuGet.config .
#TODO: Find out about fallback cache. This line is super slow.
RUN dotnet restore
COPY . .
RUN dotnet publish -c $Configuration -o /out


FROM microsoft/dotnet-nightly:2.0-runtime

WORKDIR /app
ENV ASPNETCORE_URLS="http://*:80"
COPY --from=buildenv /out .

ENTRYPOINT ["dotnet", "mvc.dll"]